import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { handleReduxFormSubmit } from '../../utils';
import Modal from '../../components/Modal';
import _BoardForm from '../forms/BoardForm';
import { createBoard } from '../../actions/boardsActions';
import { hideModal } from '../../actions/modalActions'; 

function CreateBoardModal({ dispatch }) {
  const BoardForm = _BoardForm();
  return (
    <Modal
      title="Create board"
      onClose={() => dispatch(hideModal())}
    >
      <BoardForm
        onSubmit={handleReduxFormSubmit(dispatch, createBoard.request)}
        onFormBoxCancelClick={() => dispatch(hideModal())}
      />
    </Modal>
  );
}

CreateBoardModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CreateBoardModal);
