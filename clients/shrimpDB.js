const shrimpDB = () => {

}

const shrimp = shrimpDB

window.shrimpDB = shrimpDB
window.shrimp = !window.shrimp ? shrimp : window.shrimp

/*
// ShrimpDB Example:
async function test() {
  try {
    // Connect to server with the shrimpinfo data:
    const connection = await shrimp('localhost', 'shrimp-info', 'shrimpinfo', 'info');
    // Select server database:
    const db = await connection.select('server');
    // Print out the ShrimpDB-Server version
    console.log(db.get('version'));
  } catch (e) {
    // Catch errors:
    console.error('There was an error: ' + e);
  }
}
test();
*/
