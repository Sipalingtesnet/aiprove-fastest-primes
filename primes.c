#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main(void){
    long n; if (scanf("%ld",&n)!=1) return 0;
    if (n<2){ puts("0"); return 0; }
    long m=(n+1)/2;
    unsigned char *s=calloc(m,1);
    long sq=0; while((sq+1)*(sq+1)<=n) sq++;
    for(long i=3;i<=sq;i+=2) if(!s[i/2]) for(long j=i*i;j<=n;j+=2*i) s[j/2]=1;
    long c=1; for(long i=1;i<m;i++) if(!s[i]) c++;
    printf("%ld\n",c); return 0;
}
