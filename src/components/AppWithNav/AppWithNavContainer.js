import { connect } from 'react-redux';
import AppWithNav from './AppWithNav';

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNav);
