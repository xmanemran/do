import React, { PropTypes } from 'react';
import BoardTile from './BoardTile';

const BoardsList = ({
    boards,
    onBoardTileRemoveClick,
    onBoardTileEditClick
}) => {
    return (
        <div className="b-boards-list">
            <div className="b-container">
                <div className="b-boards-list__items">
                    {boards.map((board, i) =>
                        <div
                            className="b-boards-list__item"
                            key={i}
                        >
                            <BoardTile
                                data={board}
                                onRemoveClick={onBoardTileRemoveClick}
                                onEditClick={onBoardTileEditClick}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

BoardsList.propTypes = {
    boards: PropTypes.array.isRequired,
    onBoardTileRemoveClick: PropTypes.func.isRequired,
    onBoardTileEditClick: PropTypes.func.isRequired
};

export default BoardsList;
