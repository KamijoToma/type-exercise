set tw=70
set autoindent
set nu
set shiftwidth=4
set softtabstop=4
set spell

" Function to remove trailing whitespace
function! RemoveTrailingWhitespace()
  " Substitute trailing whitespace with nothing
  %s/\s\+$//e
endfunction

" Autocommand to trigger the function on specific file types
augroup RemoveTrailingWhitespace
  autocmd!
  autocmd BufWritePre *.md,*.py call RemoveTrailingWhitespace()
augroup END
