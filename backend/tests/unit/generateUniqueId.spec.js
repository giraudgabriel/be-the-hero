const generateUniquedId = require('../../src/utils/generateUniqueId');

describe('Genarete Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniquedId();

        expect(id).toHaveLength(8);
    });
});