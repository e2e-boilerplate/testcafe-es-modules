import { Selector } from "testcafe";

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Google", async (t) => {
  await t.expect(Selector("title").innerText).eql("Google");
});
