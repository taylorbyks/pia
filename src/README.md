# Paraná Intelligent Application (PIA) - Compiler

## Requirements

- Bun (https://bun.sh/docs/installation)

```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
```

- Install Bun dependencies

```bash
bun install
```

## How to run

Run the following command, replacing `<file.pia>` with the path to the file you want to analyze.

```bash
bun run compile <file.pia>
```
You should see the output in the terminal.

## How to run tests

```bash
bun test
```