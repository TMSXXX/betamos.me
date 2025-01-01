#include<stdio.h>
#include<string.h>
#include"structure.h"


void O_Text(char* str, int arg) {
	printf("%s", str);
	if (arg == 1) getchar();
}
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main() {
	
	FILE* crt_card = fopen("character card.txt", "r");
	if(crt_card==NULL) {
		perror("Please create your character card.\n");
		return 0;
	}
	rewind(crt_card);
	crt Player;
	fscanf(crt_card, "%s %d %d\n", Player.name, &Player.hp, &Player.san);
	fclose(crt_card);
	
	crt_card = NULL;
	
	printf("Name: %s\nHp: %d\nSan: %d\n", Player.name, Player.hp, Player.san);
	printf("Is your information CORRECT? (y/n)\n");
	if(getchar()=='n') return 0;
	
	
	
	return 0;
	
}
