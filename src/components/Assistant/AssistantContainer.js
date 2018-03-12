import { connect } from 'react-redux';
import Assistant from './Assistant';
import { addChatDialog } from '../../reducers/chatLog';

const mapDispatchToProps = {
  addChatDialog
};

const mapStateToProps = (state) => ({
  chatLog: state.chatLog
});

export default connect(mapStateToProps, mapDispatchToProps)(Assistant);
