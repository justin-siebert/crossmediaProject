import { serveDir} from "jsr:@std/http/file-server";

function createOptions(status = 200) {
    return {
        status: status,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }
    };
};

function handler(request){
    return serveDir(request, {
        fsRoot: "./public",
        urlRoot: "",
        showDirListing: false,
        enableCors: true,
    });
}

Deno.serve(handler)