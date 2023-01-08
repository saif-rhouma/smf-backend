import BaseRepository from '../repositories/baseRepository';

class MarkStoreController {
  async getMarkStoreDetails(req, res) {
    const { storeId } = req.body;
    const data = await BaseRepository.findById(storeId);
    res.status(202).json(data);
  }
}

export default new MarkStoreController();
