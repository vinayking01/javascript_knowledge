## General QA 


### 1. When to use express.urlencoded/bodyParse.urlencoded and BodyParser.json()?

    ```
    1. When to Use body-parser.json()
        JSON Data: Use body-parser.json() when the incoming request body contains JSON data. This is common for APIs and applications where the client sends data as JSON.
         For JSON content type payloads, it should be - application/json otherwise wrong content type leads to bad result.
    2. When to Use body-parser.urlencoded() / express.urlencoded()
        Form Data: Use body-parser.urlencoded() when the incoming request body contains URL-encoded data, typically from HTML forms. This is the standard way forms encode data.
         For form submissions, it should be application/x-www-form-urlencoded.
    ```

### 2. how using await statement inside foreach function is different then using inside For() traditional loop / For of() ?

```
    1. for...of Loop with await
        With await inside a for...of loop, each iteration waits for the asynchronous operation (findByIdAndDelete in this case) to complete before moving to the next iteration.

    2. Traditional for Loop with await
        Sequential Execution: Similar to for...of loop, using await inside a traditional for loop ensures sequential execution of asynchronous operations

    3. forEach Function with await (Not Recommended) -  
        The forEach function doesn't wait for async operations inside its callback. It initiates all async operations concurrently, potentially leading to unpredictable behavior or unintended parallelism.

```
