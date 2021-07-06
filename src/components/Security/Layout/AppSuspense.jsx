import React, { Suspense } from 'react';
import * as PropTypes from 'prop-types';
import { Loading } from '../../Shared';

const AppSuspense = ({ children }) => (<Suspense fallback={<Loading />}>{children}</Suspense>);

AppSuspense.propTypes = {
  children: PropTypes.any
};

export default AppSuspense;
