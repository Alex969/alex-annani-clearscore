/**
 * @jest-environment jsdom
 */
 import { renderHook, act } from "@testing-library/react-hooks"
 import { rest } from 'msw';
 import { setupServer } from 'msw/node';
 import { useFetch } from "../hooks/useFetch";
 
 const server = setupServer(
   rest.get("/api", (req, res, ctx) => {
     return res(ctx.json({"accounts" : [
       {"accountCategory": "credit_cards"}
     ]}))
   })
 );
 
 beforeAll(() => server.listen());
 afterEach(() => server.resetHandlers());
 afterAll(() => server.close());
 
 test("should return data from API", async () => {
 
   const{ result, waitForNextUpdate } = renderHook(() => useFetch)
 
   await waitForNextUpdate();
 
   expect(result.current).toEqual({"accounts" : [
     {"accountCategory": "credit_cards"}
   ]})
 })