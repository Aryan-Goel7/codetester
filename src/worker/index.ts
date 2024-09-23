// Fetches test cases from Blob storage
class TestCaseLoader {
  public getTestCaseFile(problemId: number): void {
    console.log("Problem ID:", problemId, "test cases are fetched");
    // Logic to fetch test cases from Blob storage
  }
}

// Interface for testing strategies
interface ITestingStrategy {
  test(problemId: number, memoryLimit: number, timeLimit: number): void;
  buildCode(): void;
}

// C++ testing strategy
class CppTestingStrategy implements ITestingStrategy {
  private loader: TestCaseLoader = new TestCaseLoader();

  public test(problemId: number, memoryLimit: number, timeLimit: number): void {
    this.loader.getTestCaseFile(problemId);
    this.buildCode();
    CodeTester.runTests("cpp_output.txt", "cpp_answer.txt");
  }

  public buildCode(): void {
    console.log("Building C++ code");
    // Logic for building C++ code
  }
}

// Java testing strategy
class JavaTestingStrategy implements ITestingStrategy {
  private loader: TestCaseLoader = new TestCaseLoader();

  public test(problemId: number, memoryLimit: number, timeLimit: number): void {
    this.loader.getTestCaseFile(problemId);
    this.buildCode();
    CodeTester.runTests("java_output.txt", "java_answer.txt");
  }

  public buildCode(): void {
    console.log("Building Java code");
    // Logic for building Java code
  }
}

// Python testing strategy
class PythonTestingStrategy implements ITestingStrategy {
  private loader: TestCaseLoader = new TestCaseLoader();

  public test(problemId: number, memoryLimit: number, timeLimit: number): void {
    this.loader.getTestCaseFile(problemId);
    this.buildCode();
    CodeTester.runTests("python_output.txt", "python_answer.txt");
  }

  public buildCode(): void {
    console.log("Building Python code");
    // Logic for building Python code
  }
}

// Responsible for running tests and comparing output files
class CodeTester {
  public static runTests(outputFile: string, answerFile: string): void {
    console.log("Running tests and comparing", outputFile, "with", answerFile);
    // Logic to compare output files
  }
}

// Enum for strategy types to avoid magic strings
enum StrategyType {
  CPP = "CPP",
  JAVA = "JAVA",
  PYTHON = "PYTHON",
}

// Factory to return the correct testing strategy
class TestingStrategyFactory {
  public static getStrategy(strategy: StrategyType): ITestingStrategy {
    switch (strategy) {
      case StrategyType.CPP:
        return new CppTestingStrategy();
      case StrategyType.JAVA:
        return new JavaTestingStrategy();
      case StrategyType.PYTHON:
        return new PythonTestingStrategy();
      default:
        throw new Error("Unsupported strategy");
    }
  }
}

// Manages the overall testing process
class TestingManager {
  private strategy: ITestingStrategy;

  setStrategy(strategy: StrategyType) {
    this.strategy = TestingStrategyFactory.getStrategy(strategy);
  }
  public executeTest(
    problemId: number,
    memoryLimit: number,
    timeLimit: number
  ): void {
    this.strategy.test(problemId, memoryLimit, timeLimit);
  }
}

// Example usage
const testingManager = new TestingManager();
testingManager.setStrategy(StrategyType.JAVA);
testingManager.executeTest(1, 1024, 60); // For C++ testing
