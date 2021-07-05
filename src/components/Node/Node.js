import React, { forwardRef, useContext, useRef, useState } from 'react';
import styles from './Node.css';
import {
  NodeDispatchContext,
  NodeTypesContext,
  StageContext,
} from '../../context';
import { calculateCurve, getPortRect } from '../../connectionCalculator';
import { Portal } from 'react-portal';
import ContextMenu from '../ContextMenu/ContextMenu';
import IoPorts from '../IoPorts/IoPorts';
import Draggable from '../Draggable/Draggable';
import ClickOutHandler from 'react-onclickout'
import { Scrollbars } from 'react-custom-scrollbars-2';


const Node = forwardRef(({
  id,
  width,
  height,
  x,
  isSelected,
  comment,
  y,
  expanded = false,
  delay = 6,
  stageRect,
  connections,
  type,
  inputData,
  onDragStart,
  onDragEnd,
  onDragHandle,
  onDrag,
}, nodeWrapper) => {
  // const cache = useContext(CacheContext);
  const nodeTypes = useContext(NodeTypesContext);
  const nodesDispatch = useContext(NodeDispatchContext);
  const stageState = useContext(StageContext);
  const {
    label,
    deletable,
    inputs = [],
    outputs = [],
    icon,
    titleColor = '#000',
    tileBackground = '#494956',
  } = nodeTypes[type];

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuCoordinates, setMenuCoordinates] = useState({ x: 0, y: 0 });
  const [optionalAmount, setOptionalAmount] = useState(0)
  const [isInputComment, setIsInputComment] = useState(false)
  const [drag, setDrag] = useState(0)

  const commentRef = useRef();

  const byScale = value => (1 / stageState.scale) * value;

  const updateConnectionsByTransput = (transput = {}, isOutput) => {
    Object.entries(transput).forEach(([portName, outputs]) => {
      outputs.forEach(output => {
        const toRect = getPortRect(
          id,
          portName,
          isOutput ? 'output' : 'input',
          // cache
        );
        const fromRect = getPortRect(
          output.nodeId,
          output.portName,
          isOutput ? 'input' : 'output',
          // cache
        );
        const portHalf = fromRect.width / 2;
        let combined;
        if ( isOutput ) {
          combined = id + portName + output.nodeId + output.portName;
        } else {
          combined = output.nodeId + output.portName + id + portName;
        }
        let cnx;
        const cachedConnection = null /*cache.current.connections[combined]*/;
        cnx = document.querySelector(`[data-connection-id="${combined}"]`);
        const from = {
          x:
            byScale(
              toRect.x -
              stageRect.current.x +
              portHalf -
              stageRect.current.width / 2,
            ) + byScale(stageState.translate.x),
          y:
            byScale(
              toRect.y -
              stageRect.current.y +
              portHalf -
              stageRect.current.height / 2,
            ) + byScale(stageState.translate.y),
        };
        const to = {
          x:
            byScale(
              fromRect.x -
              stageRect.current.x +
              portHalf -
              stageRect.current.width / 2,
            ) + byScale(stageState.translate.x),
          y:
            byScale(
              fromRect.y -
              stageRect.current.y +
              portHalf -
              stageRect.current.height / 2,
            ) + byScale(stageState.translate.y),
        };
        cnx.setAttribute('d', calculateCurve(from, to));
      });
    });
  };

  const updateNodeConnections = () => {
    if ( connections ) {
      updateConnectionsByTransput(connections.inputs);
      updateConnectionsByTransput(connections.outputs, true);
    }
  };

  const stopDrag = (e, coordinates) => {
    nodesDispatch({
      type: 'SET_NODE_COORDINATES',
      ...coordinates,
      nodeId: id,
    });
  };

  const handleDrag = ({ x, y }) => {
    const oldPositions =
      nodeWrapper.current.style.transform.match(
        /^translate\((-?[0-9\\.]+)px, ?(-?[0-9\\.]+)px\);?/)

    if ( oldPositions.length === 3 ) {
      onDragHandle(
        nodeWrapper.current.dataset.nodeId,
        x - Number(oldPositions[1]),
        y - Number(oldPositions[2]),
      )
    }

    nodeWrapper.current.style.transform = `translate(${x}px,${y}px)`;
    updateNodeConnections();

  }

  const startDrag = e => onDragStart()

  const handleContextMenu = e => {
    e.preventDefault();
    e.stopPropagation();
    setMenuCoordinates({ x: e.clientX, y: e.clientY });
    setMenuOpen(true);
    return false;
  };

  const closeContextMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuOption = ({ value }) => {
    switch (value) {
      case 'deleteNode':
        nodesDispatch({
          type: 'REMOVE_NODE',
          nodeId: id,
        });
        break;
      default:
        return;
    }
  };

  const handleFieldBlur = () => {
    const c = commentRef.current
    if ( c && c.innerText !== comment ) {
      nodesDispatch({
        type: 'SET_NODE_DATA',
        nodeId: id,
        comment: c.innerText,
      })
    }
    setIsInputComment(false)
  }

  const handleMouseUp = () => {
    if ( drag < 10 ) {
      setIsInputComment(true)
      setTimeout(() => {
        const el = commentRef.current
        if ( el ) {
          commentRef.current.focus()
          if ( typeof el.selectionStart == 'number' ) {
            el.selectionStart = el.selectionEnd = el.value.length;
          } else if ( typeof el.createTextRange != 'undefined' ) {
            el.focus();
            const range = el.createTextRange();
            range.collapse(false);
            range.select();
          }
        }
      }, 50)
    }
  }


  return (
    <Draggable
      className={styles.wrapper}
      style={{
        width,
        border: isSelected ? '2px solid skyblue' : 'none',
        margin: isSelected ? '0' : '2px',
        transform: `translate(${x}px, ${y}px)`,
      }}
      onDragStart={startDrag}
      onDrag={handleDrag}
      onDragEnd={(e, coords) => onDragEnd(e, id, coords)}
      innerRef={nodeWrapper}
      data-node-id={id}
      disabled={isInputComment}
      onContextMenu={handleContextMenu}
      stageState={stageState}
      stageRect={stageRect}
    >
      <div className={styles.header} style={{
        overflow: isInputComment ? 'visible' : '',
        maxHeight: isInputComment ? '150' : '',
        backgroundColor: tileBackground,
        color: titleColor,
      }}>
        { !isInputComment &&
          <div {...(comment && {
            className: styles.expander,
            style: {
              background: `linear-gradient(to bottom, transparent, transparent 70px, ${tileBackground} 70px)`,
            },
          })}>
            {icon && <img alt="" src={icon}/>}
            <div className={styles.actionsContainer}>{
              optionalAmount
                ? <button
                  className={styles.expandToggle}
                  style={{ color: titleColor }}
                  onClick={() => nodesDispatch({ type: 'TOGGLE_NODE_VIEW', id })}
                >{
                  expanded ? '▲' : '▼'
                }</button>
                : null
            }</div>
            {comment
              ? <span
                className={styles.comment}
                onMouseDown={() => setDrag(0)}
                onMouseMove={() => setDrag(d => d + 1)}
                onMouseUp={handleMouseUp}>{
                comment
              }</span>
              : <span
                className={styles.label}
                onMouseDown={() => setDrag(0)}
                onMouseMove={() => setDrag(d => d + 1)}
                onMouseUp={handleMouseUp}
              >{
                label
              }</span>
            }
          </div>}
        {
          isInputComment && <ClickOutHandler onClickOut={handleFieldBlur}>
            <div style={{
              boxShadow: '0 0 0 2px #4284f7 inset',
              padding: 1,
              transform: 'translateZ(1px)',
              overflow: 'hidden',
              borderRadius: 5,
            }}>
              <Scrollbars
                autoHeight
                autoHeightMin={13}
                autoHeightMax={150}
              >
                <span
                  role="textbox"
                  contentEditable
                  ref={commentRef}
                  autoFocus
                  onInput={() => updateNodeConnections()}
                  className={styles.input}
                  style={{
                    background: `linear-gradient(to bottom, transparent, transparent 70px, ${tileBackground} 70px)`,
                  }}
                  onBlur={handleFieldBlur}>{
                  comment
                }</span>
              </Scrollbars>
            </div>
          </ClickOutHandler>
        }
      </div>
      <IoPorts
        nodeId={id}
        inputs={inputs}
        outputs={outputs}
        expanded={expanded}
        connections={connections}
        updateNodeConnections={updateNodeConnections}
        inputData={inputData}
        countOptionals={setOptionalAmount}
      />
      {menuOpen ? (
        <Portal>
          <ContextMenu
            x={menuCoordinates.x}
            y={menuCoordinates.y}
            options={[
              ...(deletable !== false
                ? [
                  {
                    label: 'Delete Node',
                    value: 'deleteNode',
                    description: 'Deletes a node and all of its connections.',
                  },
                ]
                : []),
            ]}
            onRequestClose={closeContextMenu}
            onOptionSelected={handleMenuOption}
            hideFilter
            label="Node Options"
            emptyText="This node has no options."
          />
        </Portal>
      ) : null}
    </Draggable>
  );
});

export default Node;
