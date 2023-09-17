import { URLScan } from "~/scanner";

describe("URLScan", function () {
  const subject = new URLScan();

  it("should support ip, domain and url", function () {
    expect(subject.supportedTypes).toEqual(["ip", "domain", "url"]);
  });

  describe("when apiKey is undefined", function () {
    it("should raise an error", async function () {
      subject.setAPIKey(undefined);
      const res = await subject.scanByURL("http://example.com");
      expect(res.isErr()).toBe(true);
    });
  });
});
