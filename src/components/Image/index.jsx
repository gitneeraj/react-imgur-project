import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  url: string,
  title: string
};

const Image = ({ url, title }) => (
    <li>
      <div className="image" style={{ backgroundImage: `url(${url})` }} />
      <span className="image-title">{title}</span>
    </li>
  );

Image.propTypes = propTypes;
export default Image;
