import React from "react";

import { Hello } from "../src/components/Hello";

export default {
  title: 'Hello'
};

export const zero = () => <Hello name={'Alexander'} />;
export const one = () => <Hello name={'Anna'} />;
zero.story = {
  name: 'Alexander',
};
one.story = {
  name: 'Anna',
};
