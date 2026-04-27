<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import CharacterCount from '@tiptap/extension-character-count'
import { watch } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit.configure({
      bulletList: { keepMarks: true, keepAttributes: false },
      orderedList: { keepMarks: true, keepAttributes: false },
    }),
    Placeholder.configure({ placeholder: props.placeholder ?? 'Tulis konten di sini...' }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Underline,
    CharacterCount,
  ],
  onUpdate({ editor }) {
    emit('update:modelValue', editor.getHTML())
  },
})

watch(
  () => props.modelValue,
  (val) => {
    if (editor.value && editor.value.getHTML() !== val) {
      editor.value.commands.setContent(val, { emitUpdate: false })
    }
  },
)

function isActive(name: string | Record<string, unknown>, attrs?: Record<string, unknown>) {
  if (typeof name === 'object') {
    return editor.value?.isActive(name) ?? false
  }
  return editor.value?.isActive(name, attrs) ?? false
}
</script>

<template>
  <div class="tiptap-wrapper">
    <!-- Toolbar -->
    <div class="tiptap-toolbar" v-if="editor">
      <div class="toolbar-group">
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('bold') }"
          @click="editor!.chain().focus().toggleBold().run()"
          title="Bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('italic') }"
          @click="editor!.chain().focus().toggleItalic().run()"
          title="Italic"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('underline') }"
          @click="editor!.chain().focus().toggleUnderline().run()"
          title="Underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('strike') }"
          @click="editor!.chain().focus().toggleStrike().run()"
          title="Strikethrough"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" x2="20" y1="12" y2="12"/></svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('heading', { level: 2 }) }"
          @click="editor!.chain().focus().toggleHeading({ level: 2 }).run()"
          title="Heading 2"
        >
          <span class="tb-text">H2</span>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('heading', { level: 3 }) }"
          @click="editor!.chain().focus().toggleHeading({ level: 3 }).run()"
          title="Heading 3"
        >
          <span class="tb-text">H3</span>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('paragraph') }"
          @click="editor!.chain().focus().setParagraph().run()"
          title="Paragraph"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4v16"/><path d="M17 4v16"/><path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13"/></svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('bulletList') }"
          @click="editor!.chain().focus().toggleBulletList().run()"
          title="Bullet List"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" x2="20" y1="6" y2="6"/><line x1="9" x2="20" y1="12" y2="12"/><line x1="9" x2="20" y1="18" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('orderedList') }"
          @click="editor!.chain().focus().toggleOrderedList().run()"
          title="Ordered List"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: isActive('blockquote') }"
          @click="editor!.chain().focus().toggleBlockquote().run()"
          title="Quote"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          @click="editor!.chain().focus().setHorizontalRule().run()"
          title="Divider"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="12" y2="12"/></svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <button
          type="button"
          class="tb-btn"
          :class="{ active: editor?.isActive('textAlign', { textAlign: 'left' }) }"
          @click="editor!.chain().focus().setTextAlign('left').run()"
          title="Align Left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: editor?.isActive('textAlign', { textAlign: 'center' }) }"
          @click="editor!.chain().focus().setTextAlign('center').run()"
          title="Align Center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="17" x2="7" y1="12" y2="12"/><line x1="19" x2="5" y1="18" y2="18"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          :class="{ active: editor?.isActive('textAlign', { textAlign: 'right' }) }"
          @click="editor!.chain().focus().setTextAlign('right').run()"
          title="Align Right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-group">
        <button
          type="button"
          class="tb-btn"
          @click="editor!.chain().focus().undo().run()"
          :disabled="!editor.can().undo()"
          title="Undo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
        </button>
        <button
          type="button"
          class="tb-btn"
          @click="editor!.chain().focus().redo().run()"
          :disabled="!editor.can().redo()"
          title="Redo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
        </button>
      </div>

      <div class="char-count" v-if="editor.storage.characterCount">
        {{ editor.storage.characterCount.characters() }} karakter
      </div>
    </div>

    <!-- Editor Area -->
    <EditorContent :editor="editor" class="tiptap-editor" />
  </div>
</template>

<style>
/* Global styles for TipTap (not scoped) */
.tiptap-wrapper {
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s;
  background: white;
}

.tiptap-wrapper:focus-within {
  border-color: #004532;
  box-shadow: 0 0 0 3px rgba(0, 69, 50, 0.1);
}

.tiptap-toolbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0.625rem 0.875rem;
  border-bottom: 1px solid #f3f4f6;
  background: #f9fafb;
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 0.125rem;
}

.toolbar-divider {
  width: 1px;
  height: 22px;
  background: #e5e7eb;
  margin: 0 0.25rem;
}

.tb-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s;
  font-size: 0.75rem;
}

.tb-btn:hover:not(:disabled) {
  background: #e5e7eb;
  color: #111827;
}

.tb-btn.active {
  background: #004532;
  color: white;
}

.tb-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.tb-text {
  font-size: 0.75rem;
  font-weight: 700;
}

.char-count {
  margin-left: auto;
  font-size: 0.72rem;
  color: #9ca3af;
  white-space: nowrap;
}

.tiptap-editor {
  padding: 1rem 1.25rem;
  min-height: 280px;
  font-size: 0.925rem;
  line-height: 1.7;
  color: #111827;
  cursor: text;
}

.tiptap-editor .ProseMirror {
  outline: none;
  min-height: 260px;
}

.tiptap-editor .ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  color: #9ca3af;
  pointer-events: none;
  float: left;
  height: 0;
}

.tiptap-editor .ProseMirror h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 1.25rem 0 0.625rem;
  line-height: 1.3;
}

.tiptap-editor .ProseMirror h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  margin: 1rem 0 0.5rem;
}

.tiptap-editor .ProseMirror p {
  margin: 0.5rem 0;
}

.tiptap-editor .ProseMirror ul,
.tiptap-editor .ProseMirror ol {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.tiptap-editor .ProseMirror ul li { list-style: disc; }
.tiptap-editor .ProseMirror ol li { list-style: decimal; }

.tiptap-editor .ProseMirror blockquote {
  border-left: 3px solid #004532;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  color: #6b7280;
  background: #f9fafb;
  border-radius: 0 8px 8px 0;
}

.tiptap-editor .ProseMirror hr {
  border: none;
  border-top: 2px solid #e5e7eb;
  margin: 1.25rem 0;
}

.tiptap-editor .ProseMirror strong { font-weight: 700; }
.tiptap-editor .ProseMirror em { font-style: italic; }
.tiptap-editor .ProseMirror u { text-decoration: underline; }
.tiptap-editor .ProseMirror s { text-decoration: line-through; }
</style>
