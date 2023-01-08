import BaseException from './baseException';

class DataNotFoundException extends BaseException {
  constructor(message, status = 404) {
    super(message, status);
  }
}

export default DataNotFoundException;
