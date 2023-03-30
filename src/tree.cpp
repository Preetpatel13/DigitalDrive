// Online C++ compiler to run C++ program online
#include <iostream>
#include <queue>
using namespace std;
class node {
    public:
    
    int data;
    node* left;
    node* right;
    
    node(int val ){
        
        this->data=val;
        this->left=NULL;
        this->right=NULL;
        
        
    }
    
    
};


node* buildtree(node* root){
    
    cout<<"enter the data";
    int val;
    cin>>val;
    root= new node(val);
    
    if(val==-1){
        return NULL;
    }
    cout<<"enter data for left chid of node"<<val<<endl;
    //cin>>val;
    root->left=buildtree(root->left);
    
    
    cout<<"enter data for right child of node"<<val<<endl;
    //cin>>val;
    root->right=buildtree(root->right);

    
    return root;
}


//inorder traversal

void inorder(node* root) {
    queue<node*> q;
    q.push(root);
    q.push(NULL);

    while(!q.empty()) {
        node* temp = q.front();
        q.pop();

        if(temp == NULL) { 
            //purana level complete traverse ho chuka hai
            cout << endl;
            if(!q.empty()) { 
                //queue still has some child ndoes
                q.push(NULL);
            }  
        }
        else{
            cout << temp -> data << " ";
            if(temp ->left) {
                q.push(temp ->left);
            }

            if(temp ->right) {
                q.push(temp ->right);
            }
        }
    }

}

int main() {
    // Write C++ code here
    std::cout << "Hello world!";
    node* root=NULL;
    root=buildtree(root);

inorder(root);
    return 0;
}