/* @flow */

import { compose } from 'recompose';
import Container from 'containers/components/container';
import withInitialSetup from 'containers/hocs/withInitialSetup';
import withConnectToStore from 'containers/hocs/withConnectToStore';

export default compose(withConnectToStore, withInitialSetup)(Container);
