// backend/routes/api/files.js
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const fileController = require('../../controllers/fileController');
const { upload, errorHandler } = require('../../middleware/upload');

// 파일 업로드
router.post('/upload',
  auth,
  upload.single('file'),
  errorHandler,
  fileController.uploadFile
);

// 파일 다운로드
router.get('/download/:filename',
  auth,
  fileController.downloadFile
);

router.post('/presigned-upload',
  auth,
  fileController.getPresignedUploadUrl
)

// 파일 보기 (미리보기용)
router.get('/view/:filename',
  auth,
  fileController.viewFile
);

// 파일 삭제
router.delete('/:id',
  auth,
  fileController.deleteFile
);

module.exports = router;