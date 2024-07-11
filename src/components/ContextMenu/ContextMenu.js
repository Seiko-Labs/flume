import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ScrollBar from "react-perfect-scrollbar";
import styles from "./ContextMenu.css";
import clamp from "lodash/clamp";
import { memo } from "react";

const ContextMenu = ({
  x,
  y,
  options = [],
  onRequestClose,
  onOptionSelected,
  label,
  hideHeader,
  hideFilter,
  emptyText,
}) => {
  const menuWrapper = useRef();
  const menuOptionsWrapper = useRef();
  const menuOptionsScroll = useRef();
  const filterInput = useRef();
  const [filter, setFilter] = useState("");
  const [menuWidth, setMenuWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuId = useRef(10);

  // function handleWheel(e) {
  //   console.log(e);
  //   e.wheelDelta < e.preventDefault();
  // }
  //
  // useLayoutEffect(() => {
  //   menuWrapper.current.addEventListener("touchstart", handleWheel);
  //
  //   return () => {
  //     menuWrapper.current.removeEventListener("touchstart", handleWheel);
  //   };
  // }, []);

  const handleOptionSelected = (option) => {
    onOptionSelected(option);
    onRequestClose();
  };

  const testClickOutside = useCallback(
    (e) => {
      if (menuWrapper.current && !menuWrapper.current.contains(e.target)) {
        onRequestClose();
        document.removeEventListener("click", testClickOutside, {
          capture: true,
        });
        document.removeEventListener("contextmenu", testClickOutside, {
          capture: true,
        });
      }
    },
    [menuWrapper, onRequestClose]
  );

  const testEscape = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onRequestClose();
        document.removeEventListener("keydown", testEscape, { capture: true });
      }
    },
    [onRequestClose]
  );

  useEffect(() => {
    if (filterInput.current) {
      filterInput.current.focus();
    }
    setMenuWidth(menuWrapper.current.getBoundingClientRect().width);
    document.addEventListener("keydown", testEscape, { capture: true });
    document.addEventListener("mousedown", testClickOutside, { capture: true });
    document.addEventListener("contextmenu", testClickOutside, {
      capture: true,
    });
    return () => {
      document.removeEventListener("mousedown", testClickOutside, {
        capture: true,
      });
      document.removeEventListener("contextmenu", testClickOutside, {
        capture: true,
      });
      document.removeEventListener("keydown", testEscape, { capture: true });
    };
  }, [testClickOutside, testEscape]);

  const filteredOptions = useMemo(() => {
    if (!filter) return options;
    const lowerFilter = filter.toLowerCase();
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(lowerFilter)
    );
  }, [filter, options]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setSelectedIndex(0);
  };

  useLayoutEffect(() => {
    menuOptionsScroll.current.updateScroll();
  });

  const handleKeyDown = (e) => {
    // Up pressed
    if (e.which === 38) {
      e.preventDefault();
      if (selectedIndex === null) {
        setSelectedIndex(0);
      } else if (selectedIndex > 0) {
        setSelectedIndex((i) => i - 1);
      }
    }
    // Down pressed
    if (e.which === 40) {
      e.preventDefault();
      if (selectedIndex === null) {
        setSelectedIndex(0);
      } else if (selectedIndex < filteredOptions.length - 1) {
        setSelectedIndex((i) => i + 1);
      }
    }
    // Enter pressed
    if (e.which === 13 && selectedIndex !== null) {
      const option = filteredOptions[selectedIndex];
      if (option) {
        handleOptionSelected(option);
      }
    }
  };

  useEffect(() => {
    if (hideFilter || hideHeader) {
      menuWrapper.current.focus();
    }
  }, [hideFilter, hideHeader]);

  useEffect(() => {
    const menuOption = document.getElementById(
      `${menuId.current}-${selectedIndex}`
    );
    if (menuOption) {
      const menuRect = menuOptionsWrapper.current.getBoundingClientRect();
      const optionRect = menuOption.getBoundingClientRect();
      if (
        optionRect.y + optionRect.height > menuRect.y + menuRect.height ||
        optionRect.y < menuRect.y
      ) {
        menuOption.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <div
      className={styles.menuWrapper}
      onMouseDown={(e) => e.stopPropagation()}
      onKeyDown={handleKeyDown}
      style={{
        left: x,
        top: y,
        width: filter ? menuWidth : "auto",
      }}
      ref={menuWrapper}
      tabIndex={0}
      role="menu"
      aria-activedescendant={`${menuId.current}-${selectedIndex}`}
    >
      {!hideHeader && (label ? true : !!options.length) ? (
        <div className={styles.menuHeader}>
          <label className={styles.menuLabel}>{label}</label>
          {!hideFilter && options.length ? (
            <input
              type="text"
              placeholder="Filter options"
              value={filter}
              onChange={handleFilterChange}
              className={styles.menuFilter}
              autoFocus
              ref={filterInput}
            />
          ) : null}
        </div>
      ) : null}
      <ScrollBar
        options={{
          suppressScrollX: true,
        }}
        ref={(el) => (menuOptionsScroll.current = el)}
        containerRef={(el) => (menuOptionsWrapper.current = el)}
        style={{ maxHeight: clamp(window.innerHeight - y - 70, 10, 300) }}
      >
        <div className={styles.optionsWrapper} role="menu">
          {filteredOptions.map((option, i) => (
            <ContextOption
              menuId={menuId.current}
              selected={selectedIndex === i}
              onClick={() => handleOptionSelected(option)}
              onMouseEnter={() => setSelectedIndex(null)}
              index={i}
              key={option.value + i}
            >
              <label>{option.label}</label>
              {option.description ? <p>{option.description}</p> : null}
            </ContextOption>
          ))}
          {!options.length ? (
            <span className={styles.emptyText}>{emptyText}</span>
          ) : null}
        </div>
      </ScrollBar>
    </div>
  );
};

const ContextOption = ({
  menuId,
  index,
  children,
  onClick,
  selected,
  onMouseEnter,
}) => {
  return (
    <div
      className={styles.option}
      role="menuitem"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      data-selected={selected}
      id={`${menuId}-${index}`}
    >
      {children}
    </div>
  );
};

export default memo(ContextMenu);
