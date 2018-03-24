const resolvers = {
  Query: {
    information: async ({ models }, where: any) => {
      const { information } = models;

      const response = await information.findAll({
        where,
        raw: true,
      });

      return response;
    },
  },
  Mutation: {},
};

export default resolvers;
