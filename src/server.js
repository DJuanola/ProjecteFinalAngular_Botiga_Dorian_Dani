//NodeJS: localhost:3080
const express = require('express');
const app =express();

const cors=require('cors');

app.use(cors())

app.use(express.json());

port =3080;

app.listen(port,()=>{
  console.log(`el port::${port} funciona`)
})

app.get('/api/iniciar-sessio', (req,res)=>{
var serviceAccount = require("../../untitled5/src/usuari-firebase-pbotiga-firebase-adminsdk-o5ll7-e4e3cb3af7.json");
var admin = require("firebase-admin");
const {getFirestore} = require("firebase-admin/firestore");

  const app=admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = getFirestore(app);

db.collection('ChampOfWhine').doc('Clients').get().then(al2 =>{
  console.log(al2);
  res.json(al2)
});

});
/*
app.get('/api/registre', (req,res)=>{
  var serviceAccount2 = require("./usuari-firebase-pbotiga-firebase-adminsdk-o5ll7-e4e3cb3af7.json");
  var admin2 = require("firebase-admin");
  const {getFirestore} = require("firebase-admin/firestore");

  const app=admin2.initializeApp({
    credential: admin2.credential.cert(serviceAccount2)
  });

  const db = getFirestore(app);

  db.collection('ChampOfWhine').doc('Clients').get().then(al2 =>{
    console.log(al2);
    res.json(al2)
  0});

});
*/
