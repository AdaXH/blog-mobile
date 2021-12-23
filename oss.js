const bucketName = 'bucker-for-sae';
const { accessKeyId, accessKeySecret } = require('./access');

const fs = require('fs');
const OSS = require('ali-oss');
const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId,
  accessKeySecret,
  bucket: bucketName,
});

async function putsList() {
  try {
    const files = await fs.readdirSync('./dist/assets');
    if (!files.length) return;
    for await (const item of files) {
      if (item === 'index.html') continue;
      client
        .putStream(`/blog/blog-mobile/assets/${item}`, fs.createReadStream(`./dist/assets/${item}`))
        .then((res, err) => {
          if (err) console.log('err', err);
          else console.log('publish:', item);
          //   console.log('res', res);
        });
    }
  } catch (error) {
    // console.log("")
  }
}
putsList();
