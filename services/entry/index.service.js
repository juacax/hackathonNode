import insert from './insert.service.js';
import getById from './getById.service.js';
import addPhoto from './addPhoto.service.js';
import getPhotoById from './getPhotoById.service.js';
import deletePhoto from './deletePhoto.service.js';
import voteEntry from './voteEntry.service.js';
import getVoteAvg from './getVoteAvg.service.js';
import getVoteByUserId from './getVoteByUserId.service.js';

export default {
    insert,
    getById,
    addPhoto,
    getPhotoById,
    deletePhoto,
    voteEntry,
    getVoteAvg,
    getVoteByUserId
}