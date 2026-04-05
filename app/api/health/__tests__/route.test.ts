import { GET } from "../route";
import { NextResponse } from "next/server";

// Mock NextResponse.json
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((body) => body),
  },
}));

describe("Health API Route", () => {
  it("returns status ok and a timestamp", async () => {
    const response = await GET();

    expect(response).toEqual(
      expect.objectContaining({
        status: "ok",
        timestamp: expect.any(String),
      }),
    );
    expect(NextResponse.json).toHaveBeenCalled();
  });
});
