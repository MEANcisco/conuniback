module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb://conuniadm:3gtfwat8@comunidad-shard-00-00.vws9o.mongodb.net:27017,comunidad-shard-00-01.vws9o.mongodb.net:27017,comunidad-shard-00-02.vws9o.mongodb.net:27017/conunistrap?ssl=true&replicaSet=atlas-zr0rae-shard-0&authSource=admin&retryWrites=true&w=majority',
      },
      options: {
        ssl: true,
      },
    },
  },
});
