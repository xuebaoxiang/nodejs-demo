#!usr/bin/node
const log = console.log,
            usr = process.argv[2],
                  pwd = process.argv[3];
log('usr:',usr);
log('pwd',pwd);
var buf  =new Buffer( usr +''+ pwd );
log('base64:%s',buf.toString('base64'));
