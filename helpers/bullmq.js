const {Queue,Worker} = require('bullmq');
const { createBullBoard } = require('bull-board');
const { BullMQAdapter } = require('bull-board/bullMQAdapter');


const myque = new Queue('myque')
const myquePrivate = new Queue('myquePrivate')
const { router, setQueues, replaceQueues } = createBullBoard([
  new BullMQAdapter(myque),
  new BullMQAdapter(myquePrivate)
])

const myWorker = new Worker('myque', async job => {
    if (job.name === 'index') {
      let result = await waitData(job.data);
      console.log(result);
    }
  });


const waitData = (data)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 10000);
    })
}



module.exports = {
    router,
    myque,
    myquePrivate,
    myWorker
}