import { createServer, Model, Response } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      users: Model,
    },
    seeds(server) {
      server.create('user', {
        username: 't10',
        password: '12345678',
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/users', (schema, request) => {
        return schema.users.all();
      });

      this.get('/users/:id', (schema, request) => {
        return schema.users.find(id);
      });

      this.patch('/users/:id', (schema, request) => {
        const userId = request.params.id;
        const newUser = JSON.parse(request.requestBody);
        const user = schema.users.find(userId);
        if (user) {
          return user.update(newUser);
        }
        return new Response(404, { errors: ['User not found.'] });
      });

      this.post('/login', (schema, request) => {
        let reqData = JSON.parse(request.requestBody);
        const user = schema.users.where(
          (item) =>
            item.username === reqData.username &&
            item.password === reqData.password
        );
        if (user.models?.length) {
          return { token: 'string' };
        }
        return new Response(401, {
          errors: ['Either user or password are incorrects.'],
        });
      });

      this.post('/reset-password/:username', (schema, request) => {
        const user = schema.users.where(
          (item) => item.username === request.params.username
        );
        if (user) {
          const newPass = Math.random().toString(36).substring(2, 15);
          user.update({ password: newPass });
          return new Response(200, { data: 'Password updated.' });
        }
        return new Response(404, { errors: ['User not found.'] });
      });
    },
  });
  return server;
}
