import { createServer, Model, Response } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      users: Model,
    },
    seeds(server) {
      server.create('user', {
        username: 'user@t10.digital',
        password: '12345678',
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/users', (schema, _) => {
        return schema.users.all();
      });

      this.get('/users/:id', (schema, request) => {
        const id = request.params.id;
        const user = schema.users.find(id);
        if (user) {
          return user;
        }
        return new Response(404, { errors: ['User not found.'] });
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

      this.post('/forgot-password', (schema, request) => {
        const { email } = JSON.parse(request.requestBody);
        const user = schema.users.where((item) => item.username === email);
        if (user.models.length) {
          return { msg: 'Email sent.' };
        }
        return new Response(404, { errors: ['User not found.'] });
      });

      this.post('/reset-password/:username', (schema, request) => {
        const user = schema.users.where(
          (item) => item.username === request.params.username
        );
        if (user.models.length) {
          const { password } = request.requestBody;
          user.update({ password });
          return { msg: 'Password updated.' };
        }
        return new Response(404, { errors: ['User not found.'] });
      });
    },
  });
  return server;
}
