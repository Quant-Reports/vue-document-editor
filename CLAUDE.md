# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue Document Editor is a Vue 3 component that provides a paper-sized WYSIWYG document editor using native browser `contenteditable` with custom page splitting logic. It spreads HTML content over multiple pages with word-by-word precision and supports both plain HTML and interactive Vue components as page templates.

**Key constraint**: This is not a full-featured word processor. It's designed for targeted modifications to pre-formatted documents, not for creating documents from scratch.

## Development Commands

- `npm run serve` - Development server with hot-reload for the demo application
- `npm run build` - Production build that compiles both the demo (`/docs`) and library (`/dist`)

## Architecture

### Core Components

**DocumentEditor.vue** (646 lines) - Main component containing:
- **Page Management**: Creates, updates, and removes page elements dynamically based on content overflow
- **Content Splitting**: Recursive algorithm that moves content word-by-word between pages when it overflows
- **Selection Preservation**: Saves/restores cursor position during content refactoring using temporary marker elements
- **Template Support**: Handles both plain HTML strings and Vue components (passed as `{template, props}` objects)
- **Print Integration**: Custom print handler that restructures DOM for native print with proper page breaks

**page-transition-mgmt.js** - Core algorithms for content distribution:
- `move_children_forward_recursively()` - Moves overflow content from current page to next page, splitting text nodes word-by-word
- `move_children_backwards_with_merging()` - Moves content backward when underflow occurs, merging paragraphs appropriately
- Both functions preserve HTML formatting and handle the `do_not_break` constraint for elements that shouldn't be split

### Data Flow

1. **Content Structure**: `v-model:content` is an Array where each item represents a logical section (creates a page break)
2. **Page Objects**: Each page tracks `{uuid, content_idx, template, props, elt, prev_innerHTML}`
3. **Reactive Loop**: User input → `input()` → `fit_content_over_pages()` → `emit_new_content()`
4. **Page Overflow Detection**: Compares `clientHeight` against `pages_height` (calculated from page format)

### Key Architectural Patterns

**Vue Template Integration**: Vue components are converted to custom elements using `defineCustomElement()`, allowing them to be inserted as page content while maintaining interactivity. Templates must use `.ce.vue` extension to work as web components.

**Content Modification Detection**: Pages store `prev_innerHTML` to detect user modifications. Only modified pages and their siblings undergo refactoring, optimizing performance.

**Print Mode**: When printing, the component temporarily replaces `document.body` with a print-optimized structure, adds page-break CSS, moves overlays into pages, then restores the original DOM after printing.

**Undo/Redo Limitation**: Native browser undo/redo doesn't work because the page splitting algorithm modifies HTML on every input. Applications must implement custom undo/redo by watching content changes (see Demo.vue for example implementation).

## Important Constraints

- **Template Pages**: Cannot be split across pages. They occupy exactly one full page with overflow hidden
- **Performance**: Large documents slow down significantly; content should be divided into multiple paragraphs
- **Selection API**: All DOM manipulation must preserve cursor position using marker elements
- **DPI Handling**: Uses hardcoded `px_in_mm` conversion factor (0.184... = ~137.8 DPI)
- **Content Sync**: The `prevent_next_content_update_from_parent` flag prevents infinite update loops between parent and child content changes

## Styling

CSS variables control page appearance (only affects screen, not print):
- `--page-background`, `--page-box-shadow`, `--page-border`, `--page-border-radius`
- Font style inherits from parent element wrapping the editor

## Common Modification Patterns

**Adding Page Format Support**: Modify `page_format_mm` prop and ensure `update_css_media_style()` generates correct `@page` CSS rules

**Custom Split Logic**: Extend `do_not_break` function to prevent splitting specific elements (e.g., `<section>`, `<table>`)

**Template Development**: Create `.ce.vue` files, use `contenteditable="false"` for non-editable regions, emit events for interactivity

**Print Customization**: Modify `before_print()` method to change how pages are structured for printing, add headers/footers via `overlay` prop
