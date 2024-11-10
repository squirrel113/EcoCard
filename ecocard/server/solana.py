from solana.account import Account
from solana.rpc.api import Client
from solana.transaction import Transaction
from solana.system_program import create_account
from solana.rpc.types import TxOpts

rpc_url = 'https://api.mainnet-beta.solana.com'
client = Client(rpc_url)

new_account = Account()

# replace with private key
sender_account = Account(bytes.fromhex('YOUR_PRIVATE_KEY_HERE'))

system_program_id = Account(
    bytes.fromhex('11111111111111111111111111111111'))

new_account_balance = client.get_balance(new_account.public_key())
if new_account_balance < 1:
    create_account_instr = create_account(
        from_pubkey=sender_account.public_key(),
        new_account_pubkey=new_account.public_key(),
        lamports=1000000,  # Initial balance
        space=8192,  # Account space (adjust as needed)
        program_id=system_program_id.public_key(),
    )

    transaction = Transaction().add(create_account_instr)

    transaction.sign(sender_account)

    tx_hash = client.send_transaction(transaction, opts=TxOpts(skip_confirmation=False))

    client.confirm_transaction(tx_hash)

print(f"New account public key: {new_account.public_key()}")

new_account_balance = client.get_balance(new_account.public_key())
print(f"New account balance: {new_account_balance} SOL")