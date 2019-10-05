describe("isValid", function() {
    it("should return true for valid identifiers", function() {
      expect(challenge4.isValid("okay_ok1")).toBe(true);
      expect(challenge4.isValid("$ok")).toBe(true);
      expect(challenge4.isValid("___")).toBe(true);
      expect(challenge4.isValid("str_STR")).toBe(true);
      expect(challenge4.isValid("myIdentf")).toBe(true);
    });
     
    it("should return false for invalid identifiers", function() {
      expect(challenge4.isValid("1ok0okay")).toBe(false);
      expect(challenge4.isValid("!Ok")).toBe(false);
      expect(challenge4.isValid("")).toBe(false);
      expect(challenge4.isValid("str-str")).toBe(false);
      expect(challenge4.isValid("no no")).toBe(false);
    });
  });