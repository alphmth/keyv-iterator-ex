
import Keyv from 'keyv';
  
async function testIterator(): Promise<void> {
  // One of the following
  const keyv = new Keyv();
  // Handle DB connection errors
  keyv.on('error', (err: any) => console.log('Connection Error', err));

  await keyv.set('foo', 'never expires'); // true
  await keyv.set('foo1', 'bar'); // true
  await keyv.set('foo2', 'bar2'); // true
  const foo = await keyv.get('foo'); // 'never expires'
  for await (const [key,value] of keyv.iterator()) {
    console.log(key + ":" + value);
  }
}
 
testIterator().then(() => {
  console.log('finished');
});