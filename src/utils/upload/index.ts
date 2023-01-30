import Router from 'express';
import multer from 'multer';

import {handleUpload} from './upload.controller';

const router = Router();
const upload = multer({ dest: './temp'});

router.post('/', upload.single('file'), handleUpload);

export default router;
