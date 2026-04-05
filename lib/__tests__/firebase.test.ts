// Mock the Firebase SDKs before any imports
jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
  getApps: jest.fn(() => []),
  getApp: jest.fn(),
}));

jest.mock("firebase/analytics", () => ({
  getAnalytics: jest.fn(),
  isSupported: jest.fn(() => Promise.resolve(true)),
}));

describe("Firebase Initialization Utility", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    jest.clearAllMocks();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should initialize Firebase with the environment variables when no app exists", async () => {
    // Access the mocked functions for this specific test run using dynamic import
    const { initializeApp, getApps } =
      (await import("firebase/app")) as unknown as jest.Mocked<
        typeof import("firebase/app")
      >;
    getApps.mockReturnValue([]);

    process.env.NEXT_PUBLIC_FIREBASE_API_KEY = "mock-api-key";
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = "mock-project-id";

    // Trigger initialization
    await import("../firebase");

    expect(initializeApp).toHaveBeenCalledTimes(1);
    const config = (initializeApp as jest.Mock).mock.calls[0][0];
    expect(config.apiKey).toBe("mock-api-key");
    expect(config.projectId).toBe("mock-project-id");
  });

  it("should use the existing app if already initialized (singleton)", async () => {
    const { initializeApp, getApps, getApp } =
      (await import("firebase/app")) as unknown as jest.Mocked<
        typeof import("firebase/app")
      >;
    const mockApp = {
      name: "existing-app",
    } as unknown as import("firebase/app").FirebaseApp;
    getApps.mockReturnValue([mockApp]);
    (getApp as jest.Mock).mockReturnValue(mockApp);

    const { app } = await import("../firebase");

    expect(initializeApp).not.toHaveBeenCalled();
    expect(getApp).toHaveBeenCalled();
    expect(app).toBe(mockApp);
  });

  it("should attempt to initialize Analytics in a browser environment", async () => {
    const { isSupported, getAnalytics } =
      (await import("firebase/analytics")) as unknown as jest.Mocked<
        typeof import("firebase/analytics")
      >;
    (isSupported as jest.Mock).mockResolvedValue(true);

    // Trigger initialization
    await import("../firebase");

    // We need to wait for the promise from isSupported() to resolve
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(isSupported).toHaveBeenCalled();
    expect(getAnalytics).toHaveBeenCalled();
  });
});
