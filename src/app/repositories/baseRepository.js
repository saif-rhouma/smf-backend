import FirebaseDB from '../../firebase';
import messages from '../constants/messages';
import DataNotFoundException from '../exceptions/dataNotFoundException';

class BaseRepository {
  constructor() {
    this.db = FirebaseDB.getDB();
  }

  async findById(id) {
    const record = this.db.ref(`brands/${id}`);
    const data = await record.once('value');
    if (!data) {
      throw new DataNotFoundException(messages.exceptions.dataNotFoundException);
    }
    return data.val();
  }
}
export default new BaseRepository();
