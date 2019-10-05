                    
describe("nbDig",function() {
    it("Basic tests",function() {
        expect(challenge3.nbDig(5750, 0)).toBe(4700);
        expect(challenge3.nbDig(11011, 2)).toBe(9481);
        expect(challenge3.nbDig(12224, 8)).toBe(7733);
        expect(challenge3.nbDig(11549, 1)).toBe(11905);
    })
});