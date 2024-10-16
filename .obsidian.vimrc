set tabstop=4

" yank to system clipboard
set clipboard=unnamed

" Better redo
nnoremap U <C-r>

" Cycle tabs with HL
exmap tabprev obcommand workspace:previous-tab
exmap tabnext obcommand workspace:next-tab
nnoremap H :tabprev
nnoremap L :tabnext

" navigate visual lines rather than logical ones
nnoremap j gj
nnoremap k gk
nnoremap I g0i
nnoremap A g$a

" Window controls
exmap wq obcommand workspace:close
exmap q obcommand workspace:close

" Surround commands
exmap surround_wiki surround [[ ]]
exmap surround_double_quotes surround " "
exmap surround_single_quotes surround ' '
exmap surround_backticks surround ` `
exmap surround_brackets surround ( )
exmap surround_square_brackets surround [ ]
exmap surround_curly_brackets surround { }

map [[ :surround_wiki
nunmap S
vunmap S
map S" :surround_double_quotes
map S' :surround_single_quotes
map S` :surround_backticks
map S( :surround_brackets
map S) :surround_brackets
map S[ :surround_square_brackets
map S[ :surround_square_brackets
map S{ :surround_curly_brackets
map S} :surround_curly_brackets
