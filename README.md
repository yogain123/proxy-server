# proxy-server
This is a proxy server to bypass cors restriction specifically put by other server, It also passes cookie and headers along with request. <br>
Some alternative to this proxy-server is <b>http://cors-anywhere.herokuapp.com/</b>, but it does not passess cookie along with request due to some security reasons

<b>Note:</b> The server is not very mature now and it is work in process and for now will have only limited use case.
## How to start server
npm run start

## How to use it
if you want to access rescouce from let say `https://something.com
then just append your proxy server url before the 3rd party url to pass request to proxy server, and let proxy server do the magic. <br>

For example: To access `https://something.com`
your code should be if you are using "fetch" <br>
`    const data = fetch( "http://localhost:7777/https://something.com"
    );`
	
if you are running your proxy server on `http://localhost:7777/`
