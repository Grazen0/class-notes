""""""""""""""""""""""
" Clipboard
""""""""""""""""""""""
" yank to system clipboard
set clipboard=unnamed

" Y consistent with D and C to the end of line
nnoremap Y y$

" don't pollute the register (HACK since we can't map to `"_x` or `"_C`)
nnoremap C "_c$
nnoremap x "_dl
" nnoremap c "_c " BUG not working with vimrc plugin


" <Esc> clears highlights
nnoremap <Esc> :nohl

" Another Quick Switcher ripgrep-search
" somewhat close to Telescope's livegrep
exmap liveGrep obcommand obsidian-another-quick-switcher:grep
nnoremap gl :liveGrep


""""""""""""""""""""""""""""
" Markdown/Obsidian specific
""""""""""""""""""""""""""""

" [l]og commands in console
nnoremap ,l :obcommand

" list
exmap toggleList obcommand editor:toggle-bullet-list
nnoremap ,- :toggleList

" markdown tasks
exmap checkList obcommand editor:toggle-checklist-status
nnoremap ,x :checkList

""""""""""""""""""""""
" Critic Markup
""""""""""""""""""""""
" accept all / selection
exmap acceptAll obcommand commentator:commentator-accept-all-suggestions
nnoremap ,a :acceptAll
exmap acceptSelected obcommand commentator:commentator-accept-selected-suggestions
vnoremap ,a :acceptAll

" reject all / selection
exmap rejectAll obcommand commentator:commentator-reject-all-suggestions
nnoremap ,A :rejectAll
exmap rejectSelected obcommand commentator:commentator-reject-selected-suggestions
vnoremap ,A :rejectAll


""""""""""""""""""""""
" Indentation
""""""""""""""""""""""
" <Tab> as indentation is already implemented in Obsidian

""""""""""""""""""""""
" Visual Mode
""""""""""""""""""""""

" so repeated "V" selects more lines
vnoremap V gj

" so 2x v goes to visual block mode
vnoremap v <C-v>

""""""""""""""""""""""
" Text Objects
""""""""""""""""""""""

" quicker access to [m]assive word, [q]uote, [z]ingle quote, inline cod[e],
" [r]ectangular bracket, and [c]urly braces
onoremap am aW
onoremap im iW
onoremap aq a"
onoremap iq i"
onoremap k i"
onoremap az a'
onoremap iz i'
onoremap ae a`
onoremap ie i`
onoremap ir i[
onoremap ar a[
onoremap ac a{
onoremap ic i{

vnoremap am aW
vnoremap im iW
vnoremap aq a"
vnoremap iq i"
vnoremap ay a'
vnoremap iy i'
vnoremap ae a`
vnoremap ie i`
vnoremap ir i[
vnoremap ar a[
vnoremap ac a{
vnoremap ic i{

" emulate some text objects from nvim-various-textobjs
onoremap rg G
vnoremap rg G
onoremap rp }
vnoremap rp }
onoremap m t]
vnoremap m t]
onoremap w t"
vnoremap w t"

""""""""""""""""""""""
" Substitute
""""""""""""""""""""""

" poor man's substitute.nvim/duplicate.nvim:
" brut-forcing all possible text objects 💀
nunmap s
nnoremap ss Vp
nnoremap S vg$p
nnoremap sj vjp
nnoremap sim viWp
nnoremap sam vaWp
nnoremap siw viwp
nnoremap saw vawp
nnoremap sis visp
nnoremap sas vasp
nnoremap sip vipp
nnoremap sap vapp
nnoremap sib vi)p
nnoremap saq va"p
nnoremap siq vi"p
nnoremap sk vi"p
nnoremap saz va'p
nnoremap siz vi'p
nnoremap sae va`p
nnoremap sie vi`p
nnoremap sab va)p
nnoremap sir vi]p
nnoremap sar va]p
nnoremap sic vi}p
nnoremap sac va}p
nnoremap srg vGp
nnoremap sgg vggGp

nunmap w
exmap duplicate obcommand obsidian-editor-shortcuts:duplicateLine
nnoremap ww :duplicate

nnoremap W y$$p
nnoremap wj yjjp
nnoremap wim yiWp
nnoremap wam yaWp
nnoremap wiw yiwp
nnoremap waw yawp
nnoremap wis yisp
nnoremap was yasp
nnoremap wip yipp
nnoremap wap yapp
nnoremap wib yi)p
nnoremap waq ya"p
nnoremap wiq yi"p
nnoremap wk yi"p
nnoremap waz ya'p
nnoremap wiz yi'p
nnoremap wae ya`p
nnoremap wie yi`p
nnoremap wab ya)p
nnoremap wir yi]p
nnoremap war ya]p
nnoremap wic yi}p
nnoremap wac ya}p
nnoremap wrg yGp

""""""""""""""""""""""


""""""""""""""""""""""
" Window Controls
""""""""""""""""""""""

exmap wq obcommand workspace:close
exmap q obcommand workspace:close
