# opn-cli

> Opens stuff like websites, files, directories, executables. Cross-platform

<a href="https://github.com/sindresorhus/opn-cli" target="_blank">opn-cli</a> forked to fit to my taste

## Install

```bash
npm i -g jeromedecoster/opn-cli
```

## Usage

```bash
opn <file|directory|url> [--wait] [-- <app> [args]]
```

## Examples

```bash
opn example.org
opn http://example.org -- firefox
opn http://example.org -- 'google chrome' --incognito
opn unicorn.png
opn ../..
opn
```

## Thanks

Mainly forked on <a href="https://github.com/sindresorhus/opn-cli" target="_blank">opn-cli</a>

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
