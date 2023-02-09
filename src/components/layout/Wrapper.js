import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/animations.css';

const Wrapper = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default Wrapper;
