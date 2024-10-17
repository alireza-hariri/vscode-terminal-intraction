from jupyter_client.manager import start_new_kernel
from jupyter_client.connect import find_connection_file
import IPython
import ipykernel




# Start a new kernel if needed
kernel_manager, kernel_client = start_new_kernel(kernel_name='python3')

# using kernel_manager.connection_file

conn_info = ipykernel.get_connection_info(kernel_manager.connection_file)


kernel_client.execute('raise("Hello, World!")')

# interminal
# jupyter console --existing '/path/to/connection_file.json'

# in qt console
# ipykernel.connect_qtconsole('/path/to/connection_file.json')

# both methods works and the kernel_client.execute changes 
# the state of the terminal 
# but the print sent by code dose not shows on the connected terminal
# so i just switched to anoder method
