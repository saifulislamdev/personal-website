import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/animations.css';

const Wrapper = ({ children }) => {
  AOS.init();

  return <>{children}</>;
};

export default Wrapper;
