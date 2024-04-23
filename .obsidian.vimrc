" yank to system clipboard
set clipboard=unnamed
set tabstop=4

" don't pollute the register (HACK since we can't map to `"_x` or `"_C`)
nnoremap C "_c$
nnoremap x "_dl
" nnoremap c "_c " BUG not working with vimrc plugin

" <Esc> clears highlights
nnoremap <Esc> :nohl


""""""""""""""""""""""
" Navigation
""""""""""""""""""""""

" navigate visual lines rather than logical ones
nnoremap j gj
nnoremap k gk
nnoremap I g0i
nnoremap A g$a


""""""""""""""""""""""
" Window Controls
""""""""""""""""""""""

exmap wq obcommand workspace:close
exmap q obcommand workspace:close
